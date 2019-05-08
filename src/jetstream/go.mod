module github.com/cloudfoundry-incubator/stratos/src/jetstream

go 1.12

require (
	bitbucket.org/liamstask/goose v0.0.0-20150115234039-8488cc47d90c
	code.cloudfoundry.org/diego-ssh v0.0.0-20190419150756-fd9db4fe28e9 // indirect
	code.cloudfoundry.org/inigo v0.0.0-20190419140626-42e70f087692 // indirect
	code.cloudfoundry.org/lager v2.0.0+incompatible // indirect
	code.cloudfoundry.org/ykk v0.0.0-20170424192843-e4df4ce2fd4d // indirect
	github.com/Azure/go-ansiterm v0.0.0-20170929234023-d6e3b3328b78 // indirect
	github.com/Sirupsen/logrus v0.0.0-00010101000000-000000000000 // indirect
	github.com/antonlindstrom/pgstore v0.0.0-20170604072116-a407030ba6d0
	github.com/apoydence/eachers v0.0.0-20181020210610-23942921fe77 // indirect
	github.com/bmizerany/pat v0.0.0-20170815010413-6226ea591a40 // indirect
	github.com/cf-stratos/mysqlstore v0.0.0-20170822100912-304308519d13
	github.com/cloudfoundry-community/go-cfenv v1.17.0
	github.com/cloudfoundry-incubator/stratos/src/jetstream/plugins/cfapppush v0.0.0-00010101000000-000000000000
	github.com/cloudfoundry-incubator/stratos/src/jetstream/plugins/cfappssh v0.0.0-00010101000000-000000000000
	github.com/cloudfoundry-incubator/stratos/src/jetstream/plugins/cloudfoundry v0.0.0-00010101000000-000000000000
	github.com/cloudfoundry-incubator/stratos/src/jetstream/plugins/userinvite v0.0.0-00010101000000-000000000000
	github.com/cloudfoundry-incubator/stratos/src/jetstream/repository/interfaces v0.0.0-00010101000000-000000000000
	github.com/dgrijalva/jwt-go v3.2.0+incompatible // indirect
	github.com/docker/docker v1.13.1 // indirect
	github.com/elazarl/goproxy v0.0.0-20190421051319-9d40249d3c2f // indirect
	github.com/elazarl/goproxy/ext v0.0.0-20190421051319-9d40249d3c2f // indirect
	github.com/go-sql-driver/mysql v1.4.1
	github.com/gopherjs/gopherjs v0.0.0-20190411002643-bd77b112433e // indirect
	github.com/gorilla/context v1.1.1
	github.com/gorilla/securecookie v1.1.1
	github.com/gorilla/sessions v1.1.3
	github.com/govau/cf-common v0.0.7
	github.com/jtolds/gls v4.20.0+incompatible // indirect
	github.com/kat-co/vala v0.0.0-20170210184112-42e1d8b61f12
	github.com/kr/pty v1.1.4 // indirect
	github.com/kylelemons/go-gypsy v0.0.0-20160905020020-08cad365cd28 // indirect
	github.com/labstack/echo v3.3.10+incompatible
	github.com/lib/pq v1.1.0 // indirect
	github.com/mattn/go-sqlite3 v1.10.0
	github.com/nu7hatch/gouuid v0.0.0-20131221200532-179d4d0c4d8d // indirect
	github.com/nwmac/sqlitestore v0.0.0-20180824125213-7d2ab221fb3f
	github.com/onsi/ginkgo v1.8.0 // indirect
	github.com/onsi/gomega v1.5.0 // indirect
	github.com/poy/eachers v0.0.0-20181020210610-23942921fe77 // indirect
	github.com/satori/go.uuid v1.2.0
	github.com/sirupsen/logrus v1.4.1
	github.com/smartystreets/assertions v0.0.0-20190401211740-f487f9de1cd3 // indirect
	github.com/smartystreets/goconvey v0.0.0-20160503033757-d4c757aa9afd
	github.com/tedsuo/ifrit v0.0.0-20180802180643-bea94bb476cc // indirect
	github.com/tedsuo/rata v1.0.0 // indirect
	github.com/ziutek/mymysql v1.5.4 // indirect
	google.golang.org/appengine v1.5.0 // indirect
	gopkg.in/DATA-DOG/go-sqlmock.v1 v1.0.0-00010101000000-000000000000
)

replace github.com/cloudfoundry-incubator/stratos/src/jetstream/repository/interfaces => ./repository/interfaces

replace (
	github.com/cloudfoundry-incubator/stratos/src/jetstream/plugins/cfapppush => ./plugins/cfapppush
	github.com/cloudfoundry-incubator/stratos/src/jetstream/plugins/cfappssh => ./plugins/cfappssh
	github.com/cloudfoundry-incubator/stratos/src/jetstream/plugins/cloudfoundry => ./plugins/cloudfoundry
	github.com/cloudfoundry-incubator/stratos/src/jetstream/plugins/userinvite => ./plugins/userinvite
)

replace (
	github.com/SermoDigital/jose => github.com/SermoDigital/jose v0.9.2-0.20180104203859-803625baeddc
	github.com/Sirupsen/logrus => github.com/sirupsen/logrus v1.4.0
	github.com/russross/blackfriday v2.0.0+incompatible => github.com/russross/blackfriday v1.5.2
	github.com/sergi/go-diff => github.com/sergi/go-diff v1.0.0
	github.com/spf13/cobra => github.com/spf13/cobra v0.0.3
	gopkg.in/DATA-DOG/go-sqlmock.v1 => github.com/DATA-DOG/go-sqlmock v1.1.0
)