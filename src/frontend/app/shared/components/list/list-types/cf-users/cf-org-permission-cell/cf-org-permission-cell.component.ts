import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { IOrganization } from '../../../../../../core/cf-api.types';
import { CurrentUserPermissions } from '../../../../../../core/current-user-permissions.config';
import { CurrentUserPermissionsService } from '../../../../../../core/current-user-permissions.service';
import { arrayHelper } from '../../../../../../core/helper-classes/array.helper';
import { getOrgRoles } from '../../../../../../features/cloud-foundry/cf.helpers';
import { RemoveUserPermission } from '../../../../../../store/actions/users.actions';
import { AppState } from '../../../../../../store/app-state';
import { entityFactory, organizationSchemaKey } from '../../../../../../store/helpers/entity-factory';
import { APIResource } from '../../../../../../store/types/api.types';
import { CfUser, IUserPermissionInOrg, OrgUserRoleNames } from '../../../../../../store/types/user.types';
import { CfUserService } from '../../../../../data-services/cf-user.service';
import { EntityMonitor } from '../../../../../monitors/entity-monitor';
import { AppChip } from '../../../../chips/chips.component';
import { ConfirmationDialogService } from '../../../../confirmation-dialog.service';
import { CfPermissionCell, ICellPermissionList } from '../cf-permission-cell';


@Component({
  selector: 'app-org-user-permission-cell',
  templateUrl: './cf-org-permission-cell.component.html',
  styleUrls: ['./cf-org-permission-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CfOrgPermissionCellComponent extends CfPermissionCell<OrgUserRoleNames> {
  constructor(
    public store: Store<AppState>,
    public cfUserService: CfUserService,
    private userPerms: CurrentUserPermissionsService,
    confirmDialog: ConfirmationDialogService
  ) {
    super(confirmDialog);
    this.chipsConfig$ = combineLatest(
      this.rowSubject.asObservable(),
      this.configSubject.asObservable().pipe(switchMap(config => config.org$))
    ).pipe(
      map(([user, org]: [APIResource<CfUser>, APIResource<IOrganization>]) => this.setChipConfig(user, org))
    );
  }

  private setChipConfig(row: APIResource<CfUser>, org: APIResource<IOrganization>): AppChip<ICellPermissionList<OrgUserRoleNames>>[] {
    const userRoles = this.cfUserService.getOrgRolesFromUser(row.entity, org);
    const userOrgPermInfo = arrayHelper.flatten<ICellPermissionList<OrgUserRoleNames>>(
      userRoles.map(orgPerms => this.getOrgPermissions(orgPerms, row))
    );
    return this.getChipConfig(userOrgPermInfo);
  }

  private getOrgPermissions(orgPerms: IUserPermissionInOrg, row: APIResource<CfUser>): ICellPermissionList<OrgUserRoleNames>[] {
    return getOrgRoles(orgPerms.permissions).map(perm => {
      const updatingKey = RemoveUserPermission.generateUpdatingKey(
        perm.key,
        row.metadata.guid
      );
      return {
        ...perm,
        name: orgPerms.name,
        guid: orgPerms.orgGuid,
        userName: row.entity.username,
        userGuid: row.metadata.guid,
        busy: new EntityMonitor(
          this.store,
          orgPerms.orgGuid,
          organizationSchemaKey,
          entityFactory(organizationSchemaKey)
        ).getUpdatingSection(updatingKey).pipe(
          map(update => update.busy)
        ),
        cfGuid: row.entity.cfGuid,
        orgGuid: orgPerms.orgGuid
      };
    });
  }

  public removePermission(cellPermission: ICellPermissionList<OrgUserRoleNames>) {
    this.store.dispatch(new RemoveUserPermission(
      this.cfUserService.activeRouteCfOrgSpace.cfGuid,
      cellPermission.userGuid,
      cellPermission.guid,
      cellPermission.key,
      false
    ));
  }

  public canRemovePermission = (cfGuid: string, orgGuid: string, spaceGuid: string) =>
    this.userPerms.can(CurrentUserPermissions.ORGANIZATION_CHANGE_ROLES, cfGuid, orgGuid)


}