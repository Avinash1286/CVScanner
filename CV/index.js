let img_holder=document.getElementById('showImage');
let info_holder=document.getElementById('profile');
let next=document.getElementById('next');

let data=[
    {
        name:'Avinash Yadav',
        age:17,
        city:'Baluwa Madanpur',
        language: 'Java',
        framework: 'Mavam',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'

    },
    {
        name:'Anurage Jaiswal',
        age:17,
        city:'Garuda',
        language: 'Python',
        framework: 'Dango',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'

    },
    {
        name:'Arbind Yadav',
        age:18,
        city:'Bhasadwa',
        language: 'JavaScript',
        framework: 'React Native',
        image: 'https://randomuser.me/api/portraits/men/56.jpg'

    },
    {
        name:'Gaurav Jha',
        age:16,
        city:'Janakpur',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/57.jpg'

    },
    {
        name:'Rasbari',
        age:16,
        city:'India',
        language: 'Ruby on Rails',
        framework: 'Web Framework',
        image: 'https://randomuser.me/api/portraits/women/76.jpg'

    },
];

function userIterator(users){
    let nextIndex=0;
    return{
        next: function(){
          if(nextIndex < users.length){
              return{
                  value: users[nextIndex++],
                  done: false
              }
          }
          else{
              return{
                  done:false
              }
          }
          
        }
    }
}

const userI=userIterator(data);
setUsers();

function setUsers(){
const userRef=userI.next().value;
if(userRef !=undefined){
    console.log(userRef.image);
    img_holder.innerHTML=`<img src='${userRef.image}'>`;
    info_holder.innerHTML=`<ul>
    <li class="list-group-item">Name: ${userRef.name}</li>
    <li class="list-group-item">Age: ${userRef.age}</li>
    <li class="list-group-item">City: ${userRef.city}</li>
    <li class="list-group-item">Language: ${userRef.language}</li>
    <li class="list-group-item">Framework: ${userRef.framework}</li>
    </ul>
    `
}
else{
    alert("End of Data");
    window.location.reload();
}

}

next.addEventListener('click',setUsers);
