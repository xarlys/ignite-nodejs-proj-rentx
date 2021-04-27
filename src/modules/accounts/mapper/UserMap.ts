import { classToClass } from "class-transformer";

import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";


class UserMap {
  static toDTO({
    email,
    name,
    driver_license,
    id,
    avatar,
    avatar_url,
  }: User): IUserResponseDTO{

    const user = classToClass({
      email,
      name,
      driver_license,
      id,
      avatar,
      avatar_url
    })

     return user;
  }
}

export { UserMap }