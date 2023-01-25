import React from "react";
function Ts(props)
{
    return <tr><td className="text-center">{props.id}</td><td className="text-center">{props.input}</td><td className="text-center"> {props.output}</td><td className="text-center">{props.your}</td></tr>;
}
const TestCases = ({tcs}) => {
  return (
    <>
    <div className="block">
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Test Cases
      </h1>
 
      <table className="border-solid border-2">
        <tr>
        <td className="w-48 text-center font-semibold">Test Case#</td>
            <td className="w-48 text-center font-semibold">Input</td>
            <td className="w-48 text-center font-semibold">Expected Output</td>
            <td className="w-48 text-center font-semibold">Your Output</td>
        </tr>
        {tcs.map((tc)=> <Ts id={tc.id} input={tc.input} output={tc.output} your={tc.your}/>)}
      </table>
    </div>
    </>
  );
};

export default TestCases;