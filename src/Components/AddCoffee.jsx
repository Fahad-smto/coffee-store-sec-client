

const AddCoffee = () => {
    return (
        <div>
            <h1>Add a coffee</h1>
            <form>

                <div className="flex">
                    <div>
                    <h1>Coffee name</h1>
                     <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                    <div>
                    <h1>Coffee name</h1>
                     <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddCoffee;