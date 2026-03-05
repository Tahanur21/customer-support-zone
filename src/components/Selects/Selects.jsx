

const Selects = ({selects,handleCompleteItem,complete}) => {

    return (
        <div className="mt-10 col-span-1">
            <h1 className="text-3xl font-semibold text-[#34485A]">Task Status</h1>
            <div className="mt-6 space-y-4 border border-stone-400 p-3 rounded-2xl">
            {
                selects.map((select,idx) => 
                    <div key={idx} className="bg-base-100 shadow-sm p-4 rounded-xl space-y-4">
                        <h1 className="text-xl font-semibold text-[#020406]">{select.title}....</h1>
                        <button onClick={()=>{
                            handleCompleteItem(select.title,select.id)
                        }} className="py-6 btn bg-green-600 hover:bg-green-700 text-white text-lg w-full">Complete</button>
                    </div>
                )
            }
            </div>
            <div className="mt-10 ">
                <h1 className="text-3xl font-semibold text-[#34485A]">Resolve Task</h1>
                <div className="space-y-2 mt-5 border border-stone-400 p-3 rounded-2xl">
                    { 
                        complete.map((completed,idx)=>
                            <div className="bg-[#4695de6c] shadow-lg p-4 rounded-xl" key={idx}>
                                <h1 className="text-lg text-[#020406">{completed}</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Selects;