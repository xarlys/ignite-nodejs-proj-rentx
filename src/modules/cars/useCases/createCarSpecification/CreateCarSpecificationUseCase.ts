import { inject, injectable } from "tsyringe";

import { IListCarSpecificationDTO } from "@modules/cars/dtos/IListCarSpecificationDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,

    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({
    car_id,
    specifications_id,
  }: IListCarSpecificationDTO): Promise<Car> {
    console.log(car_id);
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Cars does not exists!");
    }

    console.log(carExists);
    const specifications = await this.specificationsRepository.findByIds(
      specifications_id
    );

    carExists.specifications = specifications;
    console.log(specifications);

    await this.carsRepository.create(carExists);

    return carExists;
  }
}

export { CreateCarSpecificationUseCase };
