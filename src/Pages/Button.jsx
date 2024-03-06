export default function Button({ handleClick }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-black">
        Click on the below sun to generate form
      </span>
      <button
        onClick={handleClick}
        className="relative overflow-hidden rounded-full h-16 w-16 flex justify-center items-center bg-gradient-to-br from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 border-4 border-yellow-400 shadow-md"
      >
        <span className="text-yellow-900 text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          ☀️
        </span>
      </button>
    </div>
  );
}
