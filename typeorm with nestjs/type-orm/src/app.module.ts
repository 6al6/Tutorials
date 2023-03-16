import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: ["dist/**/*entity.js"],
      synchronize: true, //only for development, irl we use migration
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
