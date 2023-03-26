import { useForm } from "../../../hooks/useForm"
export const AddComment = ({
    onCommentsSubmit
}) => {
    const {values, changeHandler, onSubmit} = useForm({
        content:''
    }, onCommentsSubmit)
     return (
       <div>
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">

                <form className="form" onSubmit={onSubmit}>
                    <label htmlFor="comment"><i className="fa-regular fa-comment-dots"></i> Добави нов коментар:</label>
                    <textarea name="content" id="comment" placeholder="Коментар......" value={values.content} onChange={changeHandler} ></textarea>
                    <button type="submit" >Добави коментар</button>
                </form>
            </article>
        </div>

    )
}