## วิธีรันโค้ด
พิมพ์ใน cmd หรือ terminal ใน vs code `node test1.js` เพื่อทำการรันไฟล์โค้ดขึ้นมา
หรือต้องการรันโค้ดตลอดเวลาเมื่อทำการกด save ไฟล์ให้ใช้คำสั่ง `nodemon test1.js` เพื่อทำการรันไฟล์โค้ดค้างไว้ (กรณีที่เกิด error ตอนพิม nodemon ให้ลองพิมพ์ `npm i -g nodemon` เพื่อทำการติดตั้งก่อน หลังจากนั้นให้เรียกใช้อีกรอบ)

## รายละเอียดโค้ดที่ทำ

### cal-coin-for.js
เป็นการคำนวณเงินทอนจากเงินที่ได้รับมา ให้แยกออกเป็นเหรียญสิบ เหรียญห้าและเหรียญบาท โดยทำการเเยกตามลำดับ โดยในการเขียนนั้นขั้นเเรกให้ทำการประกาศตัวแปรของเหรียญที่ต้องการใช้เเยกเงินทอน (var coins = [10,5,1]) จากนั้นประกาศตัวแปรสำหรับรับค่าเป็น string (var input = "1567") จากนั้นทำการวนหาข้อมูลโดยใช้ for i โดยกำหนดการ for โดยใช้ length ของ coins และทำการเช็ค if เงื่อนไขถ้า input >= coins[i] และทำการคำนวณ