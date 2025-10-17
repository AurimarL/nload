import { getPayload } from 'payload'

import config from '@/payload.config'

export default async function Home() {
  const payload = await getPayload({
    config
  })
  const { docs: users } = await payload.find({ collection: "users" })
  console.log(users)

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>BackOffice</h1>
    </div>
  );
}
