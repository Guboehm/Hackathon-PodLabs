import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, CircularProgress, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { createRule } from "../Manager/ContractManager.js";

const RuleModal = ({ onRuleCreated }) => {

    const [open, setOpen] = useState(false);
    const [rule, setRule] = useState('0x829b824e2329e205435d941c9f13baf578548505283d29261236d8e6596d4636');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRuleChanged = (event) => {
        console.log(event.target.value);
      setAddress(event.target.value);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = () => {
        setLoading(true);
        setError(null);
    }

    return (
        <div>
            <Button variant="contained" style={{ marginRight: '8px' }} onClick={handleOpen}>
                Permissões
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Criar permissão</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                        value={address}
                        onChange={(e) => handleRuleChanged(e.target.value)}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="rule">Rule</InputLabel>
                        <Select
                            labelId="rule"
                            value={rule}
                            label="Rule"
                            onChange={(e) => setRule(e.target.value)}
                        >
                            <MenuItem value="0xa870f1a91ab66a18174ae285449a007bea36a28441e5b44a847deb90f83e86eb">Leader</MenuItem>
                            <MenuItem value="0x829b824e2329e205435d941c9f13baf578548505283d29261236d8e6596d4636">Member</MenuItem>
                        </Select>
                    </FormControl>
                    {error && (
                        <Typography variant="body2" color="error">
                            {error}
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleCreate}>
                        {loading ? (
                            <CircularProgress size={24} />
                        ) : (
                            "Criar"
                        )}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default RuleModal;