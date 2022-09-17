import { useRouter } from 'next/router'

export default function HomePage () {
    const router = useRouter()
    var username = localStorage.getItem('name');
    return (
        <h3>Welcome {username}</h3>
    )
}