package app.umkc.translate;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    public void login(View v)
    {
        EditText txtUsername = (EditText) findViewById(R.id.txtUsername);
        EditText txtPassword = (EditText) findViewById(R.id.txtPassword);
        TextView lblUsernameError = (TextView) findViewById(R.id.lblUsernameError);
        TextView lblPasswordError = (TextView) findViewById(R.id.lblPasswordError);

        String username = txtUsername.getText().toString();
        String password = txtPassword.getText().toString();

        lblUsernameError.setText("");
        lblPasswordError.setText("");

        if(username.isEmpty())
        {
            lblUsernameError.setText("Please enter the username.");
        }
        else if(password.isEmpty())
        {
            lblPasswordError.setText("Please enter password");
        }
        else if(username.equalsIgnoreCase("murali") && password.equals("Murali"))
        {
            Intent redirect = new Intent(LoginActivity.this,TranslateActivity.class);
            startActivity(redirect);
        }
        else {
            lblPasswordError.setText("Invalid Username/Password.");
        }
    }
}
