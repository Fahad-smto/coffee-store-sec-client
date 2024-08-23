import Swal from 'sweetalert2'

const AddCoffee = () => {

    
        const handleAddCoffee=event=>{
      event.preventDefault();
      const form =event.target;
      const name =form.name.value;
      const quantity =form.quantity.value;
      const supplier =form.supplier.value;
      const taste =form.taste.value;
      const category =form.category.value;
      const details =form.details.value;
      const photo =form.photo.value;
      const newCoffee ={name,quantity,supplier,taste,category,details,photo}
      console.log(newCoffee);

      fetch('http://localhost:5000/coffee',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newCoffee)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
      })

  }
    


    return (
        <div className="bg-[#F4F3F0] p-20 rounded-lg my-5 ">
            <h1 className="text-3xl font-extrabold text-center mb-5 ">Add a coffee</h1>
            <form onSubmit={handleAddCoffee}>
                 {/* name of row */}
                <div className="md:flex">
                    <div className="md:w-1/2">
                    <h1 className="m-2">Coffee name</h1>
                     <input
                        type="text"
                        name="name"
                        placeholder="Enter coffee name"
                        className="input input-bordered input-accent  max-w-xs w-full" />
                    </div>
                    <div>
                    <h1 className="m-2">Quantity</h1>
                     <input
                        type="text"
                        name="quantity"
                        placeholder="Enter coffee Quantity"
                        className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                </div>
                 {/* name of row */}
                <div className="md:flex">
                    <div className="md:w-1/2">
                    <h1 className="m-2">Supplier</h1>
                     <input
                        type="text"
                        name="supplier"
                        placeholder=" Supplier"
                        className="input input-bordered input-accent   max-w-xs w-full" />
                    </div>
                    <div>
                    <h1 className="m-2">Taste</h1>
                     <input
                        type="text"
                        placeholder="Taste"
                        name="taste"
                        className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                </div>
                 {/* name of row */}
                <div className="md:flex">
                    <div className="md:w-1/2">
                    <h1 className="m-2">Cetegory</h1>
                     <input
                        type="text"
                        placeholder="Cetegory"
                        name="category"
                        className="input input-bordered input-accent  max-w-xs w-full" />
                    </div>
                    <div>
                    <h1 className="m-2">Details</h1>
                     <input
                        type="text"
                        placeholder="Details"
                        name="details"
                        className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                </div>
                 {/* name of row */}
                <div className="">
                    <div className="">
                    <h1 className="m-2">Photo URL</h1>
                     <input
                        type="text"
                        name="photo"
                        placeholder="Enter Photo URL"
                        className="input input-bordered input-accent w-full max-w-xs " />
                    </div>
                    
                </div>

                <input type="submit" value="Add coffee"className="btn btn-block mt-5 bg-green-400" />

            </form>
        </div>
    );
};

export default AddCoffee;