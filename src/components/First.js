import React from "react";

export default function First() {
  const name = "Hello World";
  const obj = { name: "Hello World Object" };
  const data = ["We", "are", "United"]; //Show these in seperate tags
  const list = [
    { name: "Hello World 1" },
    { name: "Hello World 2" },
    { name: "Hello World 3" },
  ]; //Show these in seperate tags

  const complex = [
    { company: "XYZ", jobs: ["Javascript", "React"] },
    { company: "ABC", jobs: ["AngularJs", "Ionic"] },
  ];

  return (
    <>
      {/* ******* Q1 p1 ********* */}
      {/* <h1>{name}</h1> */}

      {/* ******* Q1 p2 ********* */}
      {/* <h1>{obj.name}</h1> */}

      {/* ******* Q1 p3 ********* */}
      {/* {data.map((value, index) => {
        return(
        <h1 key={index}> <span>{index+1}</span> {value}</h1>
        )
    })} */}

      {/* ******* Q1 p4 ********* */}
      {/* {list.map((value, index) => {
        return(
        <h1 key={index}>{value.name}</h1>
        )
    })} */}

      {/* ******* Q1 p5********* */}
      {complex.map((value, index) => {
        return (
          <div key={index}>
            <h1>Company: {value.company}</h1>
            <ul>
              
              {value.jobs.map((job, i) => {
                return <li key={i}>{job}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
