import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 80.0,
      license_plate: "ABC-123",
      fine_amount: 60.0,
      brand: "Car_Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car Description",
      daily_rate: 80.0,
      license_plate: "ABC-1234",
      fine_amount: 60.0,
      brand: "Car_Brand_Test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_Brand_Test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car Seach Name",
      description: "Car Description",
      daily_rate: 80.0,
      license_plate: "ABC-12345",
      fine_amount: 60.0,
      brand: "Car_Brand_Test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car Seach Name",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car Seach Name",
      description: "Car Description",
      daily_rate: 80.0,
      license_plate: "ABC-123456",
      fine_amount: 60.0,
      brand: "Car_Brand_Test",
      category_id: "123456789",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "123456789",
    });

    expect(cars).toEqual([car]);
  });
});
