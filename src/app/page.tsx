import LockerForm from './components/LockerForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
            Lockr Adlink Maker
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Create and manage your lockers easily
          </p>
        </div>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Create New Locker
            </h2>
            <LockerForm />
          </div>
        </div>
      </main>
    </div>
  );
}
