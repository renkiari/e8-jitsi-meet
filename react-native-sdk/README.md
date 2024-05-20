This is a forked repo of https://github.com/jitsi/jitsi-meet/tree/master/react-native-sdk

To install:
```console
npm i @renkiari/e8-react-native-sdk
```

To update dependencies:
```console
node node_modules/@renkiari/e8-react-native-sdk/update_dependencies.js
```

If your room name = {meetingName + meetingID}, you can display the meetingName only by adding a delimiter "techcare" between the meetingName and meetingID.
```console
<JitsiMeeting
  room={meetingName + "techcare" + meetingID}
/>
```