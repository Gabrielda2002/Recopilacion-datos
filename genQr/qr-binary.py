from PIL import Image
import io

qr_image = Image.open("qr.png")

buffer = io.BytesIO()
qr_image.save(buffer, format="PNG")
binary_data = buffer.getvalue()
print(binary_data)

qr_image = Image.open(io.BytesIO(binary_data))

qr_image.save("qr_desencriptado.png")