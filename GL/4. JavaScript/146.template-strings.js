const userName='Jadhav',wish='Rot in heaven';
const greeting =userName+','+wish+'!';
console.log(greeting);
console.log('Using `(Back tick)');
const greeting2=`${userName},${wish}!`;
console.log(greeting2);
console.log('Using new lines by pressing enter key');
const greeting3=`${userName},

${wish}!`;
console.log(greeting3);

//to have html like code

const htmlList=`
<ul>
    <li>Java</li>
    <li>Python</li>
    <li>Angular</li>
</ul>

`;
console.log(htmlList);

//using an object and its properties
const java={
    name:'java',
    type:'OOP',
}

const javaLang=`
    <ul>
        <li>${java.name}</li>
        <li>${java.type}</li>
    </ul>
`;

console.log(javaLang);