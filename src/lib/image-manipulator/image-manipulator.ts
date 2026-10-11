// esse service vai comprimir as imagens para deixar elas mais leves
import imageCompression from "browser-image-compression";

class ImageManipulator {
    
    private compressionOptions = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1280,
      useWebWorker: true,
    }

    // comprime uma imagem para reduzir o tamanho dela
    async compress(img: any) {
        return await imageCompression(img, this.compressionOptions);
    }

    // talvez fazer uma de resize
    private resize() {

    }

    // talvez fazer uma função que converta para webp que é um formato mais ideal para web
    private convetToWebp() {

    }

}

const imageManipulator = new ImageManipulator();
export default imageManipulator;