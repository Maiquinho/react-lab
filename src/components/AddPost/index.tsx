import { ChangeEvent, useState } from 'react';
import { addPostProps } from '../../types/Post';


export function AddPost({ onAdd }: addPostProps) {

    const [fieldPost, setFieldPost] = useState({ title: '', body: '' });


    function handleFieldPost(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {

        switch (e.target.localName) {
            case 'input':
                setFieldPost(prevField => {
                    return {
                        ...prevField,
                        title: e.target.value
                    }
                })
                break;

            case 'textarea':
                setFieldPost(prevField => {
                    return {
                        ...prevField,
                        body: e.target.value
                    }
                })
                break;
        }
    }

    function handleAddClick() {

        if(fieldPost.title !== '' && fieldPost.body !== ''){
            onAdd(fieldPost.title, fieldPost.body);
        }else{
            alert('Preencha os campos corretamente!');
        }
    }

    return (
        <fieldset>
            <legend>Adicionar novo post</legend>

            <input type="text" placeholder='Título do Post' onChange={handleFieldPost} value={fieldPost.title} />
            <textarea placeholder='Corpo do Post' onChange={handleFieldPost} value={fieldPost.body}></textarea>

            <button onClick={handleAddClick}>Adicionar</button>
        </fieldset>
    )
}