from PIL import Image
import io

with open("dato.txt", "rb") as file:
      binary_data = file.read()
      
qr_image = Image.open(io.BytesIO(binary_data))

qr_image.save("qr_desencriptado.png")