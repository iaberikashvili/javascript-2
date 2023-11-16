// 1.ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე

for (let a = 5; a <=100; a++) {
    const element = a;
    console.log(element);
  } 

// 2.მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე

let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
for (let i = 0; i < array1.length; i++) {
    const result = array1[i];
    if (result > 0 && result < 10)
    console.log(result);
    }


    // 3.მოცემულია მასივი
//let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი


let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let a = 0; a < array2.length; a++) {
    const element = array2[a];
    console.log(element);
    if (element == 5) 
}
  console.log("aris");
        break 




        // 4.მოცემულია მასივი:
//let array3= [1, 2, 3, 4, 5];
//ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
	
let array3= [1, 2, 3, 4, 5];  //ვერ გავაკეთე

// 5.მოცემულია მასივი:
//let array4= [1, 2, 3, 4, 5];
//ციკლის საშუალებით გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)
//ვერ ვაკეთებ

// 6.მოცემულია მასივი
//გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
//let array5 = [1, 2, 3, 7, 6, 9];

let array5 = [1, 2, 3, 7, 6, 9];
for (let i = 0; i < array5.length; i++) {
    const element = array5[i];
    if (element == 7) {
        continue
                   
    }
    console.log(element);

// 7. // aმოიღეთ user ცვლადის სტატუსი

let user = {
    firsName: "giorgi"
    lastname: "smith"
    age:25 
     studentstatus: "active"
}
console.log(user.studentstatus)  //dot notation
console.log(user[studentstatus]);



//მოცემულია ობიექტი:
//8.let user = {
   // name: 'giorgi',
    //age:  20,
    //studentstatus: 'active'
//თუ უსერის ასაკი ნაკლებია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი:  hello;
//თუ უსერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello levani;
//თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
//ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let user = {
    name: "giorgi"
    age: 20
    studentstatus: "active"
    }
    if (userage < 18 && user.studentstatus == active) {
        console.log(hello);

    }



    if (user == levani) {
        console.log(hello levani);

    }

    if(user.studentstatus == userAge < 25) {
        console.log(hello world);

    } else {
        console.log(error);
    }

    //let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
//1.ამოიღეთ მარტო ლუწი რიცხვები
//2.ამოიღეთ კენტი რიცხვები

let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
     if (element % 2 == 0) {
        console.log(element);
        
     }
    
 }

    //  10.კონსოლში გამოიტანეთ მარტო ის ობიექტი, რომლის status property-ის მნიშვნელობა არის true;

    let users = [
        {username: 'giorgi', status: false},
        {username: 'levani', status: false},
        {username: 'anna', status: true}
    ]  //ver vaketeb
