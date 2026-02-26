'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { AlertTriangle } from 'lucide-react';

interface LegalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAccept: () => void;
  title?: string;
}

export function LegalModal({ open, onOpenChange, onAccept, title = "Important Disclosure" }: LegalModalProps) {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (accepted) {
      onAccept();
      setAccepted(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <AlertTriangle className="h-6 w-6 text-amber-500" />
            {title}
          </DialogTitle>
          <DialogDescription className="text-base pt-4">
            Please read and acknowledge the following before proceeding:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
            <h4 className="font-bold text-gray-900">Risk Warning</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>This token is highly volatile and speculative</li>
              <li>You may lose your entire participation value</li>
              <li>No guarantee of profit or returns</li>
              <li>Not financial or legal advice</li>
              <li>Participation is voluntary and at your own risk</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
            <h4 className="font-bold text-gray-900">Security Reminder</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Always verify contract addresses from official sources</li>
              <li>Beware of scams and impersonators</li>
              <li>Never share your private keys or seed phrases</li>
              <li>Use only official community links</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
            <h4 className="font-bold text-gray-900">Legal Disclaimer</h4>
            <p className="text-sm text-gray-700">
              This token is not an offer or solicitation to buy or sell securities. It is not an investment.
              Token participation may not be available in your jurisdiction. You are responsible for compliance
              with local laws. The brand and token are separate entities.
            </p>
          </div>

          <div className="flex items-start space-x-2 pt-4">
            <Checkbox
              id="accept"
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked as boolean)}
            />
            <label
              htmlFor="accept"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              I have read and understand these disclosures. I acknowledge the risks and proceed voluntarily.
            </label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleAccept}
            disabled={!accepted}
            className="bg-cyan-600 hover:bg-cyan-700 text-white"
          >
            I Understand & Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
