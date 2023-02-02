import React from "react";
function banner(dif)
{
    if(dif=="Easy")
    {
        return <span class="inline-block shadow-md py-3 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded ml-2">Easy</span>;
    }
    else if(dif=="Medium")
    {
        return <span class="inline-block shadow-md py-2.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-orange-600 text-white rounded ml-2">Medium</span>;
    }
    else{
        return <span class="inline-block shadow-md py-3 px-3 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">Hard</span>;
    }
}
 const DisplayQuestion = ({qsn}) => {
    return (
        <>
        <div class="px-5 py-2 w-full border-2 border-black z-10 rounded-md">
            <div>
            <h1 className="inline-block font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        {qsn.title}
      </h1>
      <div class="inline-block float-right">
        {banner(qsn.difficulty)}
      </div>
      <hr class="w-50% h-1 bg-gray-100 border-0 rounded md:my-1 dark:bg-gray-700"></hr>
            </div>
    
      <div>
        <h2 class="font-medium leading-tight text-xl mt-0 mb-2 text-black-600"> Description </h2>
       <em class="text-lg">{qsn.description}</em>
      </div>
      <div class="py-2">
        <h2 class="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">Input Format</h2>
        <p class="text-lg">{qsn.inputFormat}</p>
      </div>
      <div class="py-2">
        <h2 class="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">Output Format</h2>
        <p class="text-lg">{qsn.outputFormat}</p>
      </div>
      <h2 class="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">Examples</h2>
      <div class="flex-container grid md:grid-cols-2 gap-3">
      <div class="bg-gray-300 rounded-lg py-5 px-6 mb-4 text-base text-gray-800 mb-3">
        <h2 class="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">Sample Input</h2>
        {qsn.SampleInput}
      </div>
      <div class="bg-gray-300 rounded-lg py-5 px-6 mb-4 text-base text-gray-800 mb-3">
        <h2 class="font-medium leading-tight text-xl mt-0 mb-2 text-black-600">Sample Output</h2>
        {qsn.SampleOutput}
      </div>
      </div>
      
    </div>
        </>
    );
 };
export default DisplayQuestion;