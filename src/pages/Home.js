import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getValues } from '../action';




export default function Home() {
  
  /* HOOKS */
  const dispatch = useDispatch();
  const {values} = useSelector(state => state.valuesReducer);

  /* FUNCTIONS */
  const loadValues = async()=>{
    dispatch(await getValues());
  };

  /* EFFECTS */
  useEffect(()=>{
    loadValues();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <div>
      
      {values.length > 0 ?
        <ul>
          {
            values.map((item, key)=>(
              <div key={key}>
                <li>{item.date}</li>
              </div>
            ))
          }
        </ul>
        
        :
        <p>array vazio</p>
      }
    </div>
  );
}
