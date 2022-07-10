export const addBlog = ({ title = "", description = "",id="",date="",by="",img="",text="",time=""}) => ({
    type: "ADD_BLOG",
    blog: {
      id: id,
      title: title,
      description: description,
      date: date,
      by:by,
      img:img,
      text:text,
      time:time
    },
  });
  
  export const removeBlog = ({id})=>({
      type:"REMOVE_BLOG",
      id:id
  })
  
  export const blogEdit =(id,update)=>({
      type: "EDIT_BLOG",
      id,
      update
  })