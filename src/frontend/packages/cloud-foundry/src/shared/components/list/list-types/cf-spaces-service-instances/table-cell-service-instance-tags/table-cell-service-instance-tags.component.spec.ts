import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChipsComponent } from '../../../../../../../../core/src/shared/components/chips/chips.component';
import { EntityMonitorFactory } from '../../../../../../../../core/src/shared/monitors/entity-monitor.factory.service';
import {
  generateCfBaseTestModulesNoShared,
} from '../../../../../../../../core/test-framework/cloud-foundry-endpoint-service.helper';
import { TableCellServiceInstanceTagsComponent } from './table-cell-service-instance-tags.component';

describe('TableCellServiceInstanceTagsComponent', () => {
  let component: TableCellServiceInstanceTagsComponent;
  let fixture: ComponentFixture<TableCellServiceInstanceTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableCellServiceInstanceTagsComponent, AppChipsComponent],
      imports: generateCfBaseTestModulesNoShared(),
      providers: [EntityMonitorFactory]

    })
      .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TableCellServiceInstanceTagsComponent);
    component = fixture.componentInstance;
    component.row = {
      entity: {
        active: true,
        bindable: true,
        description: 'test',
        extra: '',
        label: '',
        info_url: '',
        long_description: '',
        plan_updateable: false,
        tags: [],
        url: '',
        version: '',
        service_instance: {
          entity: {
            tags: []
          }
        }
      },
      metadata: {
        created_at: '',
        guid: '',
        updated_at: '',
        url: ''
      }
    };
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
