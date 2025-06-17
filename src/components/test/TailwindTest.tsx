export const TailwindTest = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Tailwind CSS Test
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
          <p className="text-gray-800">This card should have:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Responsive layout</li>
            <li>Hover effects</li>
            <li>Custom primary color</li>
            <li>Proper spacing</li>
          </ul>
        </div>
        <div className="bg-secondary text-white rounded-lg p-6">
          <p className="font-medium">This card should use:</p>
          <ul className="list-disc list-inside opacity-80 mt-2">
            <li>Custom secondary color</li>
            <li>White text</li>
            <li>Proper rounded corners</li>
            <li>Consistent padding</li>
          </ul>
        </div>
      </div>
    </div>
  );
}; 