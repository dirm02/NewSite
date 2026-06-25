/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "authAlert": {
      "emailTemplate": {
        "subject": "New Lif3line login"
      }
    },
    "resetPasswordTemplate": {
      "body": "<p>Hello,</p><p>Click the button below to reset your password.</p><p><a class=\"btn\" href=\"https://lif3line.me/authentication/reset-password?token={TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a></p><p><i>If you did not ask to reset your password, you can ignore this email.</i></p><p>Thanks,<br/>Lif3line team</p>",
      "subject": "Reset your Lif3line password"
    },
    "verificationTemplate": {
      "body": "<p>Hello,</p><p>Thank you for joining Lif3line.</p><p>Click the button below to verify your email address.</p><p><a class=\"btn\" href=\"https://lif3line.me/authentication/verify-email?token={TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify email</a></p><p><i>If you did not create a Lif3line account, you can ignore this email.</i></p><p>Thanks,<br/>Lif3line team</p>",
      "subject": "Verify your Lif3line email"
    }
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // update collection data
  unmarshal({
    "authAlert": {
      "emailTemplate": {
        "subject": "Login from a new location"
      }
    },
    "resetPasswordTemplate": {
      "body": "<p>Hello,</p>\n<p>Click on the button below to reset your password.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-password-reset/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Reset password</a>\n</p>\n<p><i>If you didn't ask to reset your password, please ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
      "subject": "Reset your {APP_NAME} password"
    },
    "verificationTemplate": {
      "body": "<p>Hello,</p>\n<p>Thank you for joining us at {APP_NAME}.</p>\n<p>Click on the button below to verify your email address.</p>\n<p>\n  <a class=\"btn\" href=\"{APP_URL}/_/#/auth/confirm-verification/{TOKEN}\" target=\"_blank\" rel=\"noopener\">Verify</a>\n</p>\n<p><i>If you didn't recently register, please ignore this email.</i></p>\n<p>\n  Thanks,<br/>\n  {APP_NAME} team\n</p>",
      "subject": "Verify your {APP_NAME} email"
    }
  }, collection)

  return app.save(collection)
})
