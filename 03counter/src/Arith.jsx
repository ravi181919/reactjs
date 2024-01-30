import './App.css'

function Arith()
{
    const user = {userName: 'ravi', age: 30}
    const selfProfile = user && user.age > 18;
    if (selfProfile) {
        return <p>User = {(user.userName)}</p>;
    } else {
        return <p>No profile available.</p>
    }
}
export default Arith