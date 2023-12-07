import cv2

from pyzbar.pyzbar import decode

image = cv2.imread("qr.png")

gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

decoded_objects = decode(gray_image)

for obj in decoded_objects:
      print('tipo', obj.type)
      data = obj.data.decode("utf-8")
      print('Datos: ', data)
      
      cv2.putText(image, data,(50,50), cv2.FONT_HERSHEY_COMPLEX, 1, (255,0,0), 2)
      cv2.imshow("codigo Qr decodificado", image)
      cv2.waitKey(0)
      
cv2.destroyAllWindows()