import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View } from 'react-native';

export function Especialidades(){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Oftamologista', value: 'oftamologista'},
        {label: 'Cardiologista', value: 'cardiologista'},
        {label: 'Dermatologista', value: 'dermatologista'},
        {label: 'Endocrinologista', value: 'endocrinologista'},
        {label: 'Outro', value: 'outro'}
    ]);
    return(
        <View>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}

                
            />
        </View>
    );
}