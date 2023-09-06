import { LogOut } from 'lucide-react'
import Button from '../Button'

const Profile = () => {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/jeffersonbraster.png"
        alt="Imagem do usuário"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Jefferson Brandão
        </span>
        <span className="truncate text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          jeffersonbraster@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}

export default Profile
