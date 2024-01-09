import {CgProfile} from "react-icons/cg"
import {BiMaleFemale} from "react-icons/bi"
import {LiaBirthdayCakeSolid} from "react-icons/lia"
import {HiOutlineMail} from "react-icons/hi"
import {BiPhone} from "react-icons/bi"
import {GrLocation} from "react-icons/gr"
import { useSelector } from "react-redux"

const Profile = () => {
    const {user}=useSelector((state)=>state.user);
   
    // console.log(user)
            return (
                <div className="">
                    <div className=" flex flex-col justify-center text-center mt-9">
                        <div className="m-auto text-9xl"><CgProfile/></div>
                        <h2 className=" text-4xl text-green-600">{user.firstName} {user.lastName}</h2>
                        <div>
                            <div className="flex flex-row justify-center m-auto text-2xl font-thin ">
                                <BiMaleFemale className=" mr-2 "/> Male</div>
                        </div>
                        <div className=" flex flex-row justify-center m-auto text-xl font-thin ">
                            <LiaBirthdayCakeSolid className="mr-2"/> 16/10/2001
                        </div>
                        <div className=" flex flex-row justify-center m-auto text-xl font-thin">
                            <HiOutlineMail className="mr-2"/> {user.email}</div>
                        <div className=" flex flex-row justify-center m-auto text-xl font-thin"><BiPhone className="mr-2"/> {user.phone}</div>
                        <div className=" flex flex-row justify-center m-auto text-xl font-thin"><GrLocation className="mr-2"/> IIST Rau, Indore, 453331, Madhya Pradesh, India</div>
                    </div>
                </div>
            );
    };

export default Profile; 