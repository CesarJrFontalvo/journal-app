import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../view";
import { AddOutlined } from "@mui/icons-material";


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aperiam voluptatibus quis, ratione provident cum tenetur dicta asperiores a quisquam laborum tempore sint similique. Voluptatum aliquid laborum vel recusandae quisquam.</Typography> */}
    
      {/* Nothing Selected */}
      <NothingSelectedView />

      {/* Not Viewed */}
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>

  );
};
