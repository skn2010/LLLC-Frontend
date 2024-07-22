export default function CreateCompanyForm() {
  return (
    <form>
      <div>
        <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold text-gray-700">
          Create a company
        </h3>
        <p className="mt-2.5 text-md text-gray-700">
          Please fill all the fields to create a company.
        </p>
      </div>

      <div className="mt-10">
        <label className="_label">Name</label>
        <input type="text" className="_input mt-1" />
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
        <div>
          <label className="_label">Contact Number</label>
          <input type="text" className="_input mt-1" />
        </div>
        <div>
          <label className="_label">Email</label>
          <input type="email" className="_input mt-1" />
        </div>
      </div>

      <p className="mt-10 text-secondary">Time (opening and closing)</p>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
        <div>
          <label className="_label">Opening time</label>
          <input type="time" className="_input mt-1" />
        </div>
        <div>
          <label className="_label">Closing Time</label>
          <input type="time" className="_input mt-1" />
        </div>
      </div>

      <p className="mt-10 text-secondary">Location</p>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
        <div>
          <label className="_label">Latitude</label>
          <input type="text" className="_input mt-1" />
        </div>
        <div>
          <label className="_label">Longitude</label>
          <input type="text" className="_input mt-1" />
        </div>
      </div>

      <div className="mt-6">
        <label className="_label">Category</label>
        <select className="_input mt-1 bg-transparent">
          <option value="1">Restaurant</option>
        </select>
      </div>

      <div className="mt-6">
        <label className="_label">Description</label>
        <textarea rows={5} className="_input mt-1"></textarea>
      </div>

      <div className="mt-12 flex justify-end">
        <button className="_btn _primary-btn">Create a Company</button>
      </div>
    </form>
  );
}
