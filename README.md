[Nest](https://github.com/nestjs/nest), [Prisma](https://www.prisma.io/)를 이용한 프로젝트 목업입니다.

## 실행하기

먼저, 의존성들을 설치해줍니다.

```bash
$ yarn
```

이제 다음과 같은 명령어로 서버를 실행할 수 있습니다. 기본적으로 3000번 포트에 실행됩니다.

```bash
$ yarn start

# watch 모드. 파일이 바뀔 때마다 reload됩니다.
$ yarn start:dev
```

## 테스트

```bash
$ yarn test

# 테스트 커버리지 확인
$ yarn test:cov
```

## 개발

다음 명령어를 이용하면 이름이 `{module_name}`인 module의 뼈대를 자동으로 생성해줍니다.

```bash
$ yarn nest generate module {module_name}
```

[링크](https://docs.nestjs.com/cli/usages#nest-generate)의 내용에 따라, `module`을 `service`, `provider` 등으로 바꾸면, 해당 기능을 구현해둔 뼈대를 생성할 수 있습니다.

## DB (Prisma) 관련 명령어

`/prisma/schema.prisma`에 DB Schema를 작성하게 됩니다. 작성할 DB Schema에 따른 repository type들을 업데이트해주고 싶다면, 다음을 실행합니다.

```bash
$ yarn prisma
```

다음 명령어를 이용하면, 작성한 DB Schema를 SQL 구문으로 번역 (migrate)합니다. 이전에 migrate를 한 적이 있다면, 마지막으로 migrate한 시점에서부터 변경된 내용을 SQL 구문으로 번역해줍니다. 결과는 `/prisma/migrations` 폴더 안에서 확인할 수 있습니다. 이 명령어는 배포할 때에만 사용하는 것이 좋습니다.

```bash
$ yarn prisma:generate
```

다음 명령어를 이용하면, DB를 한눈으로 볼 수 있는 Prisma Studio를 `localhost:5555`에 열 수 있습니다.

```bash
$ yarn prisma:studio
```
