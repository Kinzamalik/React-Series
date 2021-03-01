import React, { useState } from 'react'

function StateFun() {
   const [data,setData]= useState('Kinzayy');
   function updateData() {
       setData('Shanzayyyy')
   }
    return (
      <div>
          <h1>{data}</h1>
        <button onClick={updateData}>Update</button>
      </div>
    );
}

export default StateFun
