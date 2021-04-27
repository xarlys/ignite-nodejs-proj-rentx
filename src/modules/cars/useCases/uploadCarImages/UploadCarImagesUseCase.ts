import { inject, injectable } from "tsyringe";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
// import { deleteFile } from "@utils/file";

interface IRequest {
  car_id: string;
  image_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject("CarsImagesRepository")
    private carsImagesRepository: ICarsImagesRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}
  async execute({ car_id, image_name }: IRequest): Promise<void> {
    image_name.map(async (image) => {
      await this.carsImagesRepository.create(car_id, image);
      await this.storageProvider.save(image, "cars");
    });

    /* image_name.map(async (image) => {
      const carImages = await this.carsImagesRepository.findByImage(image);
      if (carImages) {
        await deleteFile(`./tmp/cars/${carImages}`);
      }
      
      await this.carsImagesRepository.create(car_id, image);
     
    }); */
  }
}

export { UploadCarImagesUseCase };
