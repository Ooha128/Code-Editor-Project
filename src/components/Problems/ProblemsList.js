import React from "react";
function difficulty(dif)
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
function Ts(props)
{
    return <tr class="bg-white border-b"><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{props.id}</td><td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.input}</td><td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"> {props.output}</td><td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.your}</td><td class="text-sm font-bold text-gray-900 font-light px-6 py-4 whitespace-nowrap">{props.status}</td></tr>;
}
const ProblemList =({}) =>{
    return (
        <>
       <div class="flex rounded justify-center">
<div class="overflow-x-auto">
  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
    <div class="overflow-hidden">
      <table class="w-3/4 border-2 border-black z-10 rounded-md">
        <thead class="bg-white border-b">
          <tr>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Status
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Qsn #
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Title
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Difficulty
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-100 border-b">
              <td></td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Hello World!
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <span class="inline-block shadow-md py-2 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded ml-2">Easy</span>
            </td>
            <td>
            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Solve</button>
            </td>
          </tr>
          <tr class="bg-white border-b">
              <td></td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Addition of Numbers
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <span class="inline-block shadow-md py-2 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded ml-2">Easy</span>
            </td>
            <td>
            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Solve</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
        </>
);
}
export default ProblemList;