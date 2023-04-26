import firestore from '@react-native-firebase/firestore';

const GetUpdate= async()=>{
    const data = await firestore().collection('testing').doc("3SPInivs50b5f8vy5cxE").get()
    const newData = data._data

    return(newData)
}

export default GetUpdate