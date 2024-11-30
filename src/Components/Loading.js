import React from "react";
import { ActivityIndicator, Modal, StyleSheet } from "react-native";

export default function Loading({loading}) {
  return (
    <Modal transparent={true} visible={loading}>
      <ActivityIndicator
        size={"large"}
        animating={loading}
        style={style.loading}

      />
    </Modal>
  );
}

const style = StyleSheet.create({
    loading: {
        // marginTop : 55,
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "black",
        zIndex: 1,
        opacity: 0.7,
      },
})
