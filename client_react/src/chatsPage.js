import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

function hashString(input) {
  try {
      // Create a Hash object with the SHA-256 algorithm
      const hash = crypto.createHash('sha256');

      // Update the hash with the input string
      hash.update(input);

      // Get the hashed bytes
      const hashedBytes = hash.digest();

      // Convert the byte array to a hexadecimal representation
      const hashedString = hashedBytes.toString('hex');

      // Return the hashed string
      return hashedString;
  } catch (error) {
      console.error(error); // Handle the error appropriately in your actual code
      return null; // Return null in case of an error
  }
}

export default ChatsPage;