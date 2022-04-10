import * as Font from 'expo-font';

export default  UseFonts = async()=>{
    await Font.loadAsync({
        'GrapeNutsRegular': require('../../assets/fonts/GrapeNutsRegular.ttf'),
        'Poppins-MediumItalic': require('../../assets/fonts/Poppins-MediumItalic.ttf'),
        'Roboto-MediumItalic': require('../../assets/fonts/Roboto-MediumItalic.ttf'),
    })
}