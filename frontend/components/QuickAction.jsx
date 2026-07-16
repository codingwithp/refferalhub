function QuickAction({

title,

icon,

onClick

}){

return(

<button

className="quick-card"

onClick={onClick}

>

<div

style={{

fontSize:34,

marginBottom:12

}}

>

{icon}

</div>

{title}

</button>

);

}

export default QuickAction;