import './profile.css'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import { ref, set } from 'firebase/database'
import React, { useState } from 'react'

  function Profile(){
    const [name, setName]= useState('');
    const [lastName, setLastname]= useState('');
    const [tcNumber, setTcnumber]= useState('');
    const [phoneNumber, setPhonenumber]= useState('');
    const [bod, setBod]= useState('');
    const [weight, setWeight]= useState('');
    const [height, setHeight]= useState('');

 
  return (
    <div className='center'>
      <div className='profile'>
        <h1>Profile</h1>
        <span onClick={() => signOut(auth)}>Sign Out</span>
        
        Name: <input 
        type="text" 
        id="namebox" 
        value={name} 
        onChange={e => {setName(e.target.value);}} 
        placeholder="Adınızı Giriniz"
        />
        <br /><br />
        Last Name: <input 
        type="text" 
        id="lastnamebox" 
        value={lastName} 
        onChange={e => {setLastname(e.target.value);}} 
        placeholder="Soyadınızı Giriniz"
        />
        <br /><br />
        T.C. No: <input 
        type="text" 
        pattern="[0-9]*"
        id="tcnobox"  
        maxlength={11}
        value={tcNumber} 
        onChange={e => {setTcnumber(e.target.value);}} 
        placeholder="T.C. No Giriniz"
        />
        <br /><br />
        Phone Number: <input 
        type="tel" 
        id="phonebox"
        minlength={10}
        maxlength={11} 
        value={phoneNumber} 
        onChange={e => {setPhonenumber(e.target.value);}} 
        placeholder="Telefon No Giriniz"
        />
        <br /><br />
        Weigh: <input 
        min={0} 
        max={300}
        type="number"  
        id="weightbox" 
        value={weight} 
        onChange={e => {setWeight(e.target.value);}}
        />
        <br /><br />
        Height: <input 
        min={0} 
        max={220} 
        type="number" 
        id="heightbox" 
        value={height} 
        onChange={e => {setHeight(e.target.value);}}
        />
        <br /><br />
        Born Date: <input 
        type="date" 
        id="bodbox" 
        value={bod} 
        onChange={e => {setBod(e.target.value);}}
        />
        <br /><br />
        <div className='profiles'>
          <form name="profile-form" action="upload" method="post" enctype="multipart/form-data">
          <h2>Kullanıcı Bilgileri</h2><br />
  
          <label for="photo1">Photo 1:</label><br />
          <input type="file" name="photo1" id="photo1" accept="image/*"/><br /><br />
  
          <label for="photo2">Photo 2:</label><br />
          <input type="file" name="photo2" id="photo2" accept="image/*"/><br /><br />
  
          <label for="photo3">Photo 3:</label><br />
          <input type="file" name="photo3" id = "photo3" accept="image/*"/><br /><br />
  
          <label for = "photo4">Photo 4:</label><br />
          <input type="file" name="photo4" id = "photo4" accept="image/*"/><br /><br/>
  
          <button id="addbutton" onClick={Buttons}>Add</button> 							
          <button id="updatebutton" onClick={Buttons}>Update</button> 							
          <button id="deletebutton" onClick={Buttons}>Delete</button> 							
          <button id="selectbutton" onClick={Buttons}>Get Data from DB</button> 							
                         
        
          </form>  
        </div>
        
  
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </div>
    </div>
  )
  }


   const Buttons = (e)=>{
    const id = e.target.id;
 
   if(id =='addbutton'){
     addData();
   }
   else if(id=='updatebutton'){
     //this.updateData();
   }
   else if(id=='deletebutton'){
     //this.deleteData();
   }
   else if(id=='selectbutton'){
     //this.selectData();
   }
 }


  function addData(){
    
    const db = auth;

    set(ref(db, 'Users/'+ db.tcnumber),
    {
      name: db.name,
      lastname: db.lastname,
      phonenumber: db.phonenumber,
      dob: db.dob,
      weight: db.weight,
      height: db.height
    })
    .then(() => {alert('Data was added successfully')})
    .catch((error)=> {alert("There was an error, details: " + error)});
  }

  
export default Profile
  