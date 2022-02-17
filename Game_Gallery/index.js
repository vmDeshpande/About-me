export default function Content() {
  const [games, addgames] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setname] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function addgames(name, desc, imgurl) {
    

    addgames([...tasks,  { name: name, desc: desc, imgurl: imgurl }]);
    
    setShowForm(false);
  }

  return (
    <>
      <div style={{ height: "85px" }}>
        <imgUrl.src = "https://www.minecraft.net/content/dam/games/minecraft/screenshots/RayTracing-MineCraft-PMP-Always-Something-New.jpg"
          onClick={() => {
            setShowForm(!showForm);
          }}
          style={{
            width: "50px",
            height: "50px",
            color: "#3f51b5",
            float: "right",
            padding: "0.6em 1.2em",

            transform: showForm ? "rotate(45deg)" : "rotate(0deg)",
          }}
        ></AddCircleIcon>
      </div>
      {showForm && (
        <div style={{ margin: "2em" }}>
          <div>
            <TextField
              helperText="Enter Game Name"
              variant="outlined"
              type="text"
              name="tasktitle"
              onChange={(data) => {
                console.log(data)
                setTitle(data.target.value);
              }}
            ></TextField>
          </div>
          <div>
            <TextField
              helperText="Enter Something About Game"
              variant="outlined"
              type="text"
              name="taskdesc"
              onChange={(data) => {
                setDesc(data.target.value);
              }}
            ></TextField>
          </div>
          <div>
            <TextField
              helperText="Enter Game Image URL"
              variant="outlined"
              type="text"
              name="imgurl"
              onChange={(data) => {
                setImgUrl(data.target.value);
              }}
            ></TextField>
          </div>
          <Button
            name="addgame"
            variant="contained"
            color="primary"
            size="large"
           style={{marginTop:"2em"}}
            startIcon={<SaveIcon />}
            onClick={() => {
              addTask(title, desc, imgUrl);
            }}
          >
           Save
          </Button>
        </div>
      )}
      <div style={{ padding: "3em" }}>
        <TaskCard tasks={tasks} setTasks={setTasks}></TaskCard>
      </div>
    </>
  );
}
