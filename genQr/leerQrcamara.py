import cv2;
from pyzbar.pyzbar import decode

cap = cv2.VideoCapture(0)

while True:
      ret, frame = cap.read()
      if ret:
            decoded_objects = decode(frame)
            
            cv2.imshow("Qr cam", frame)
            
            for obj in decoded_objects:
                  print("Tipo:", obj.type)
                  print("datos ", obj.data.decode("utf-8"))
                  
      if cv2.waitKey(1) & 0xFF == ord('q'):
            break
      
cap.release()
cv2.destroyAllWindows()