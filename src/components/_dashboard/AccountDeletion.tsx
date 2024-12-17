import React from "react";
import Alert from "@/components/core/alert";
import Button from "@/components/core/button";
import Typography from "@/components/core/typography";
import Panel from "@/components/dashboard/Panel";

export default function AccountDeletion() {
  return (
    <Panel.PanelRoot>
      <Panel.PanelHeader>
        <Panel.PanelTitle>Delete Account</Panel.PanelTitle>
      </Panel.PanelHeader>
      <Panel.PanelContent>
        <Alert.AlertRoot variant="destructive">
          <Alert.AlertTitle>Request for account deletion</Alert.AlertTitle>
          <Alert.AlertDescription>
            <Typography.Text>
              Once you delete your account, all your data will be permanently
              deleted. This action cannot be undone.
            </Typography.Text>
          </Alert.AlertDescription>
          <div className="mt-3">
            <Button destructive size="sm">
              Request to delete account
            </Button>
          </div>
        </Alert.AlertRoot>
      </Panel.PanelContent>
    </Panel.PanelRoot>
  );
}
