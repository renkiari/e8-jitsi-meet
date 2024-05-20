This is a forked repo of https://github.com/jitsi/jitsi-meet/tree/master/react-native-sdk

To install:
```console
npm i @renkiari/e8-react-native-sdk
```

To update dependencies:
```console
node node_modules/@renkiari/e8-react-native-sdk/update_dependencies.js
```

If you want display the meeting name only, add a delimiter "techcare" between the meeting name and meeting id.
```console
<JitsiMeeting
  room={meetingName + "techcare" + meetingID}
/>
```